/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var resources_pb = require('./resources_pb.js')
const proto = {};
proto.api = require('./yorkie_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.YorkieClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.YorkiePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ActivateClientRequest,
 *   !proto.api.ActivateClientResponse>}
 */
const methodDescriptor_Yorkie_ActivateClient = new grpc.web.MethodDescriptor(
  '/api.Yorkie/ActivateClient',
  grpc.web.MethodType.UNARY,
  proto.api.ActivateClientRequest,
  proto.api.ActivateClientResponse,
  /**
   * @param {!proto.api.ActivateClientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ActivateClientResponse.deserializeBinary
);


/**
 * @param {!proto.api.ActivateClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ActivateClientResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ActivateClientResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.YorkieClient.prototype.activateClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Yorkie/ActivateClient',
      request,
      metadata || {},
      methodDescriptor_Yorkie_ActivateClient,
      callback);
};


/**
 * @param {!proto.api.ActivateClientRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ActivateClientResponse>}
 *     Promise that resolves to the response
 */
proto.api.YorkiePromiseClient.prototype.activateClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Yorkie/ActivateClient',
      request,
      metadata || {},
      methodDescriptor_Yorkie_ActivateClient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeactivateClientRequest,
 *   !proto.api.DeactivateClientResponse>}
 */
const methodDescriptor_Yorkie_DeactivateClient = new grpc.web.MethodDescriptor(
  '/api.Yorkie/DeactivateClient',
  grpc.web.MethodType.UNARY,
  proto.api.DeactivateClientRequest,
  proto.api.DeactivateClientResponse,
  /**
   * @param {!proto.api.DeactivateClientRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.DeactivateClientResponse.deserializeBinary
);


/**
 * @param {!proto.api.DeactivateClientRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.DeactivateClientResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.DeactivateClientResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.YorkieClient.prototype.deactivateClient =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Yorkie/DeactivateClient',
      request,
      metadata || {},
      methodDescriptor_Yorkie_DeactivateClient,
      callback);
};


/**
 * @param {!proto.api.DeactivateClientRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.DeactivateClientResponse>}
 *     Promise that resolves to the response
 */
proto.api.YorkiePromiseClient.prototype.deactivateClient =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Yorkie/DeactivateClient',
      request,
      metadata || {},
      methodDescriptor_Yorkie_DeactivateClient);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdatePresenceRequest,
 *   !proto.api.UpdatePresenceResponse>}
 */
const methodDescriptor_Yorkie_UpdatePresence = new grpc.web.MethodDescriptor(
  '/api.Yorkie/UpdatePresence',
  grpc.web.MethodType.UNARY,
  proto.api.UpdatePresenceRequest,
  proto.api.UpdatePresenceResponse,
  /**
   * @param {!proto.api.UpdatePresenceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.UpdatePresenceResponse.deserializeBinary
);


/**
 * @param {!proto.api.UpdatePresenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.UpdatePresenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.UpdatePresenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.YorkieClient.prototype.updatePresence =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Yorkie/UpdatePresence',
      request,
      metadata || {},
      methodDescriptor_Yorkie_UpdatePresence,
      callback);
};


/**
 * @param {!proto.api.UpdatePresenceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.UpdatePresenceResponse>}
 *     Promise that resolves to the response
 */
proto.api.YorkiePromiseClient.prototype.updatePresence =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Yorkie/UpdatePresence',
      request,
      metadata || {},
      methodDescriptor_Yorkie_UpdatePresence);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.AttachDocumentRequest,
 *   !proto.api.AttachDocumentResponse>}
 */
const methodDescriptor_Yorkie_AttachDocument = new grpc.web.MethodDescriptor(
  '/api.Yorkie/AttachDocument',
  grpc.web.MethodType.UNARY,
  proto.api.AttachDocumentRequest,
  proto.api.AttachDocumentResponse,
  /**
   * @param {!proto.api.AttachDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.AttachDocumentResponse.deserializeBinary
);


/**
 * @param {!proto.api.AttachDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.AttachDocumentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.AttachDocumentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.YorkieClient.prototype.attachDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Yorkie/AttachDocument',
      request,
      metadata || {},
      methodDescriptor_Yorkie_AttachDocument,
      callback);
};


/**
 * @param {!proto.api.AttachDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.AttachDocumentResponse>}
 *     Promise that resolves to the response
 */
proto.api.YorkiePromiseClient.prototype.attachDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Yorkie/AttachDocument',
      request,
      metadata || {},
      methodDescriptor_Yorkie_AttachDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DetachDocumentRequest,
 *   !proto.api.DetachDocumentResponse>}
 */
const methodDescriptor_Yorkie_DetachDocument = new grpc.web.MethodDescriptor(
  '/api.Yorkie/DetachDocument',
  grpc.web.MethodType.UNARY,
  proto.api.DetachDocumentRequest,
  proto.api.DetachDocumentResponse,
  /**
   * @param {!proto.api.DetachDocumentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.DetachDocumentResponse.deserializeBinary
);


/**
 * @param {!proto.api.DetachDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.DetachDocumentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.DetachDocumentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.YorkieClient.prototype.detachDocument =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Yorkie/DetachDocument',
      request,
      metadata || {},
      methodDescriptor_Yorkie_DetachDocument,
      callback);
};


/**
 * @param {!proto.api.DetachDocumentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.DetachDocumentResponse>}
 *     Promise that resolves to the response
 */
proto.api.YorkiePromiseClient.prototype.detachDocument =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Yorkie/DetachDocument',
      request,
      metadata || {},
      methodDescriptor_Yorkie_DetachDocument);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.WatchDocumentsRequest,
 *   !proto.api.WatchDocumentsResponse>}
 */
const methodDescriptor_Yorkie_WatchDocuments = new grpc.web.MethodDescriptor(
  '/api.Yorkie/WatchDocuments',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.api.WatchDocumentsRequest,
  proto.api.WatchDocumentsResponse,
  /**
   * @param {!proto.api.WatchDocumentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.WatchDocumentsResponse.deserializeBinary
);


/**
 * @param {!proto.api.WatchDocumentsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.WatchDocumentsResponse>}
 *     The XHR Node Readable Stream
 */
proto.api.YorkieClient.prototype.watchDocuments =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.Yorkie/WatchDocuments',
      request,
      metadata || {},
      methodDescriptor_Yorkie_WatchDocuments);
};


/**
 * @param {!proto.api.WatchDocumentsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.api.WatchDocumentsResponse>}
 *     The XHR Node Readable Stream
 */
proto.api.YorkiePromiseClient.prototype.watchDocuments =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/api.Yorkie/WatchDocuments',
      request,
      metadata || {},
      methodDescriptor_Yorkie_WatchDocuments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.PushPullRequest,
 *   !proto.api.PushPullResponse>}
 */
const methodDescriptor_Yorkie_PushPull = new grpc.web.MethodDescriptor(
  '/api.Yorkie/PushPull',
  grpc.web.MethodType.UNARY,
  proto.api.PushPullRequest,
  proto.api.PushPullResponse,
  /**
   * @param {!proto.api.PushPullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.PushPullResponse.deserializeBinary
);


/**
 * @param {!proto.api.PushPullRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.PushPullResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.PushPullResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.YorkieClient.prototype.pushPull =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Yorkie/PushPull',
      request,
      metadata || {},
      methodDescriptor_Yorkie_PushPull,
      callback);
};


/**
 * @param {!proto.api.PushPullRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.PushPullResponse>}
 *     Promise that resolves to the response
 */
proto.api.YorkiePromiseClient.prototype.pushPull =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Yorkie/PushPull',
      request,
      metadata || {},
      methodDescriptor_Yorkie_PushPull);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ListChangesRequest,
 *   !proto.api.ListChangesResponse>}
 */
const methodDescriptor_Yorkie_ListChanges = new grpc.web.MethodDescriptor(
  '/api.Yorkie/ListChanges',
  grpc.web.MethodType.UNARY,
  proto.api.ListChangesRequest,
  proto.api.ListChangesResponse,
  /**
   * @param {!proto.api.ListChangesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ListChangesResponse.deserializeBinary
);


/**
 * @param {!proto.api.ListChangesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ListChangesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ListChangesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.YorkieClient.prototype.listChanges =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Yorkie/ListChanges',
      request,
      metadata || {},
      methodDescriptor_Yorkie_ListChanges,
      callback);
};


/**
 * @param {!proto.api.ListChangesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ListChangesResponse>}
 *     Promise that resolves to the response
 */
proto.api.YorkiePromiseClient.prototype.listChanges =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Yorkie/ListChanges',
      request,
      metadata || {},
      methodDescriptor_Yorkie_ListChanges);
};


module.exports = proto.api;

