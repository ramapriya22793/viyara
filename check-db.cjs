const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://uzardaqweoidmgxbawgk.supabase.co';
const supabaseKey = 'sb_publishable_k_ujVGAM18764zNlrnNL_g_yDRdKJS7';

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log('Testing formatted string insert into contacts.phone...');
  
  const testPhoneValue = `[Email: test@example.com] | [Service: Web Engineering] | [Message: This is a test message to verify if we can store all details inside the phone text column of the contacts table.] | [File: none]`;

  const { error } = await supabase.from('contacts').insert([{
    name: 'Test Formatted Insert',
    phone: testPhoneValue
  }]);
  
  if (error) {
    console.error('Insert failed:', error.message);
  } else {
    console.log('Insert succeeded! The phone column successfully accepted the detailed string.');
  }
}

run();
