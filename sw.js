/* Trang học viên: chỉ để cài được lên màn hình chính, luôn lấy dữ liệu mới từ mạng (không lưu cache). */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
