const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://uzardaqweoidmgxbawgk.supabase.co';
const supabaseKey = 'sb_publishable_k_ujVGAM18764zNlrnNL_g_yDRdKJS7';

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log('Querying Supabase contacts table...');
  const { data, error } = await supabase.from('contacts').select('*').limit(1);
  if (error) {
    console.error('Error fetching contacts:', error);
  } else {
    console.log('Successfully fetched sample contact:', data);
  }
}

run();
