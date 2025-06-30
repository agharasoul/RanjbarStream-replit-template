let streaming = false;
document.getElementById('startBtn').onclick = async () => {
  const res = await fetch('/toggle_stream');
  const data = await res.json();
  streaming = data.streaming;
  document.getElementById('status').innerText = streaming
    ? "وضعیت: در حال پخش"
    : "وضعیت: متوقف شده";
};
document.getElementById('faceBtn').onclick = () => {
  alert("تشخیص چهره شبیه‌سازی شد!");
};