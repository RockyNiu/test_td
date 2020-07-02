import * as taos from 'td-connector';
const host = 'tdengine';
const user = 'root';
const password = 'taosdata';
const config = '/etc/taos';
const port = 6020;
const conn = taos.connect({
    host,
    user,
    password,
    config,
    port
})
const cursor = conn.cursor();