from opentelemetry import trace
from opentelemetry.exporter.jaeger import JaegerSpanExporter
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchExportSpanProcessor


# SpanExporter receives the spans and send them to the target location.
exporter = JaegerSpanExporter(
    service_name="auto-instrument-example",
    agent_host_name="jaeger",
    agent_port=6831,
)
span_processor = BatchExportSpanProcessor(exporter)
trace.get_tracer_provider().add_span_processor(span_processor)
print('Tracing Initialized')
import recommendation_server as r
r.main()