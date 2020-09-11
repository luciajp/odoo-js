odoo.define('academy_qunit.tools', (require) => {

    const state = {};
    function CallQueuer (call){
        if (!call)
            return;
        if (state.onCall)
            return state.queuedCall = call;
        state.onCall = true;
        return call().then(() => {
            call = state.queuedCall;
            state.onCall = false;
            state.queuedCall = null;
            CallQueuer(call);

        });
    };
    return { CallQueuer };
});