/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.toS3.Event', null, global);
goog.exportSymbol('proto.toS3.IcsUrl', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toS3.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.toS3.Event.repeatedFields_, null);
};
goog.inherits(proto.toS3.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.toS3.Event.displayName = 'proto.toS3.Event';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.toS3.Event.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toS3.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.toS3.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toS3.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toS3.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startList: jspb.Message.getRepeatedField(msg, 2),
    endList: jspb.Message.getRepeatedField(msg, 3),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    location: jspb.Message.getFieldWithDefault(msg, 5, ""),
    geo: jspb.Message.getFieldWithDefault(msg, 6, ""),
    status: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toS3.Event}
 */
proto.toS3.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toS3.Event;
  return proto.toS3.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toS3.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toS3.Event}
 */
proto.toS3.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt32());
      msg.setStartList(value);
      break;
    case 3:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt32());
      msg.setEndList(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGeo(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toS3.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toS3.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toS3.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toS3.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
  f = message.getEndList();
  if (f.length > 0) {
    writer.writePackedInt32(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getGeo();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.toS3.Event.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.toS3.Event.prototype.setTitle = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated int32 start = 2;
 * @return {!Array.<number>}
 */
proto.toS3.Event.prototype.getStartList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array.<number>} value */
proto.toS3.Event.prototype.setStartList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.toS3.Event.prototype.addStart = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.toS3.Event.prototype.clearStartList = function() {
  this.setStartList([]);
};


/**
 * repeated int32 end = 3;
 * @return {!Array.<number>}
 */
proto.toS3.Event.prototype.getEndList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array.<number>} value */
proto.toS3.Event.prototype.setEndList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.toS3.Event.prototype.addEnd = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.toS3.Event.prototype.clearEndList = function() {
  this.setEndList([]);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.toS3.Event.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.toS3.Event.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string location = 5;
 * @return {string}
 */
proto.toS3.Event.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.toS3.Event.prototype.setLocation = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string geo = 6;
 * @return {string}
 */
proto.toS3.Event.prototype.getGeo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.toS3.Event.prototype.setGeo = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string status = 7;
 * @return {string}
 */
proto.toS3.Event.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.toS3.Event.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toS3.IcsUrl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toS3.IcsUrl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.toS3.IcsUrl.displayName = 'proto.toS3.IcsUrl';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toS3.IcsUrl.prototype.toObject = function(opt_includeInstance) {
  return proto.toS3.IcsUrl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toS3.IcsUrl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toS3.IcsUrl.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toS3.IcsUrl}
 */
proto.toS3.IcsUrl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toS3.IcsUrl;
  return proto.toS3.IcsUrl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toS3.IcsUrl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toS3.IcsUrl}
 */
proto.toS3.IcsUrl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toS3.IcsUrl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toS3.IcsUrl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toS3.IcsUrl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toS3.IcsUrl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.toS3.IcsUrl.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.toS3.IcsUrl.prototype.setUrl = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.toS3);
