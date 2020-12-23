//tracing.js
'use strict';
const { NodeTracerProvider } = require('@opentelemetry/node');
const { SimpleSpanProcessor } = require("@opentelemetry/tracing");
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');

const provider = new NodeTracerProvider();

provider.addSpanProcessor(
    new SimpleSpanProcessor(
        new JaegerExporter({
            serviceName: "Payments",
            JAEGER_ENDPOINT: "http://jaeger-collector:14268",

        })
    )
);
provider.register();

console.log("tracing initialized");