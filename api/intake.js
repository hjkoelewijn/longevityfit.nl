import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://longevityfit.nl');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    voornaam,
    achternaam,
    email,
    telefoon,
    leeftijd,
    startMoment,
    uitdaging,
    commitment,
  } = req.body;

  if (!voornaam || !email) {
    return res.status(400).json({ error: 'Verplichte velden ontbreken.' });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { error } = await supabase.from('intake_gesprekken').insert({
    voornaam,
    achternaam,
    email,
    telefoon,
    leeftijd,
    start_moment: startMoment,
    uitdaging,
    commitment,
    ingediend_op: new Date().toISOString(),
  });

  if (error) {
    console.error('Supabase error:', error);
    return res.status(500).json({ error: 'Opslaan mislukt. Probeer het opnieuw.' });
  }

  return res.redirect(302, 'https://longevityfit.nl/bedankt-intake.html');
}
