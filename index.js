const messages = require('./qrcodeToS3_pb');
const services = require('./qrcodeToS3_grpc_pb');
// https://github.com/netoxygen/node-qrcodeine#readme seems more interesting, but require a dockerfile
const qr = require('qr-image');
const pkgcloud = require('pkgcloud');
const client = pkgcloud.storage.createClient({
  provider: 'amazon',
  protocol: 'http://',
  serversUrl: 's3:80',
  accessKeyId: 'remote-identity',
  accessKey: 'remote-credential',
  forcePathBucket: true,
});
const grpc = require('grpc');
const hostname = process.env.ZEN_HOSTNAME;

function orderToQrCode(call, callback) {
  const { order, event } = call.request.toObject();
  const url = `${hostname}/dashboard/events/${event}/orders/${order}/checkin`;
  const imgBuffer = qr.image(url, { type: 'png' });
  const writeStream = client.upload({
    container: 'zenbookingqrcode',
    remote: `${order}.png`, 
  });
  writeStream.on('error', (err) => {
    return callback(grpc.status.UNKNOWN);
  });
  writeStream.on('success', (file) => {
    const reply = new messages.QrCodeUrl([file.location]);
    callback(null, reply);
  });
  imgBuffer.pipe(writeStream);
}

function main() {
  const server = new grpc.Server();
  server.addService(services.QrCoderService, { toS3: orderToQrCode });
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
