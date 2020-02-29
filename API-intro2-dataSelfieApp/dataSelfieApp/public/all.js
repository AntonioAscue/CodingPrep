async function getData() {
  const res = await fetch('/api');
  const data = await res.json();
  console.log(data);
}
getData()
