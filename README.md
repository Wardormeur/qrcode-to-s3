# ICS generator to S3 from Zen events
`yarn dev` will regenerate the protos and restart the service

You must copy the compiled js files into cp-zen-platform in order to have both part of the service (client/server) up to date
ex : cp icsToS3_pb.js icsToS3_grpc_pb.js ../../cp-zen-platform/web/lib/transports/messages/
