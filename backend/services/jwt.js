const crypto = require('crypto');

exports.encode = function(payload, secret){
    const algorithm = 'HS256';
    
    const header = {
        type: 'JWT',
        alg: algorithm
    };
    
    const jwt = base64Encode(JSON.stringify(header)) + '.' + base64Encode(JSON.stringify(payload));
    return jwt + '.' +  sign(jwt, secret);
};

exports.decode = function(token, secret){
    const segments = token.split('.');
    
    if(segments.length !==3){
        throw new Error("Token structure incorrect");
    }
    
    const header = JSON.parse(base64Decode(segments[0]));
    const payload = JSON.parse(base64Decode(segments[1]));
    
    const rawSignature = segments[0] + '.' + segments[1];
    
    if(!verify(rawSignature, secret, segments[2])){
        throw new Error("Verification failed");
    }
    
    return payload;
};

function verify(raw, secret, signature){
    return signature === sign(raw, secret);
}

function sign(str, key){
    return crypto.createHmac('sha256', key).update(str).digest('base64');
}

function base64Encode(str){
    return new Buffer(str).toString('base64');
}

function base64Decode(str){
    return new Buffer(str, 'base64').toString();
}
