import * as taos from 'td-connector';
const conn = taos.connect({ host: "127.0.0.1", user: "root", password: "taosdata", config: "/etc/taos", port: 0 })
const cursor = conn.cursor();