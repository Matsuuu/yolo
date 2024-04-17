import { supabase } from "./supabase.js"

export async function setupCounter(element) {
    let counter = await getCount();
    const setCounter = (count) => {
        counter = count
        element.innerHTML = `count is ${counter}`
        clickity();
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    element.innerHTML = `count is ${counter}`
}

async function getCount() {
    const result = await supabase.from("clicks")
        .select("click_count")
        .eq("id", 1)
        .limit(1)
        .single();

    return result.data.click_count;
}

async function clickity() {
    const res = await supabase.from("clicks")
        .update({
            click_count: await getCount() + 1
        })
        .eq("id", 1);
}
