'use strict';

const opentelemetry = require('@opentelemetry/api');
const { NodeTracerProvider } = require('@opentelemetry/node');
const { SimpleSpanProcessor } = require('@opentelemetry/tracing');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');
const { JaegerHttpTracePropagator } = require('@opentelemetry/propagator-jaeger');

const { B3Propagator } = require('@opentelemetry/core');

const provider = new NodeTracerProvider();

const exporter = new JaegerExporter({
    serviceName: "currency",
    JAEGER_AGENT_PORT: 6832,
    JAEGER_AGENT_HOST: "jaeger",
    OTEL_PROPOGATOR: JaegerHttpTracePropagator
});

provider.propagator = JaegerHttpTracePropagator;
provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
provider.register();
console.log("tracing initialized");