import { setupCounter } from './counter.js'
import "./supabase.js";
import { supabase } from './supabase.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


async function callSupabase() {
    const foo = await supabase.from("clicks")
        .select()
        .eq("id", 1)
        .limit(1)
        .single();
    console.log(foo);
}

callSupabase();
