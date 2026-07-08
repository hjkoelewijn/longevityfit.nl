module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: `Method not allowed: ontvangen "${req.method}"` });
  }

  const {
    voornaam, achternaam, email, telefoon,
    leeftijd, startMoment, uitdaging, commitment,
    eventId,
  } = req.body;

  if (!voornaam || !email) {
    return res.status(400).json({ error: 'Verplichte velden ontbreken.' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const response = await fetch(`${supabaseUrl}/rest/v1/intake_gesprekken`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': serviceRoleKey,
      'Authorization': `Bearer ${serviceRoleKey}`,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify({
      voornaam,
      achternaam,
      email,
      telefoon,
      leeftijd,
      start_moment: startMoment,
      uitdaging,
      commitment,
      event_id: eventId || null,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error('Supabase fout:', response.status, text);
    return res.status(500).json({ error: `Supabase ${response.status}: ${text}` });
  }

  return res.status(200).json({ ok: true });
}
