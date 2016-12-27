import "core-js/es6";
import "core-js/es7/reflect";
import "ts-helpers";

if (process.env.ENV === 'production') {

} else {
    // dev
    Error['stackTraceLimit'] = Infinity;
}
