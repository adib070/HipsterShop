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
            JAEGER_AGENT_PORT: 6831,
            JAEGER_AGENT_HOST: "jaeger",
        })
    )
);
provider.register();

console.log("tracing initialized");