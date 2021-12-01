if (typeof window === 'undefined') {
    globalThis.window = {};
}
if (typeof self === 'undefined') {
    globalThis.self = globalThis.window;
}
if (typeof document === 'undefined') {
    if (window.document) {
        globalThis.document = window.document;
    }
    else {
        globalThis.document = window.document = {
            createElement: function (elementName) {
                switch (elementName) {
                    case 'canvas':
                        return {
                            getContext: function (contextName) {
                                switch (contextName) {
                                    case 'webgl':
                                        return {
                                            getExtension: function () { }
                                        };
                                    case '2d':
                                        return {
                                            fillRect: function () { },
                                            drawImage: function () { },
                                            getImageData: function () { }
                                        };
                                }
                            }
                        };
                }
            }
        };
    }
    if (typeof CanvasRenderingContext2D === 'undefined') {
        globalThis.CanvasRenderingContext2D = { prototype: {} };
    }
}
export {};
