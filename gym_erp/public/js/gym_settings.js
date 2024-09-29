frappe.ui.form.on('Gym Setttings', {
    validate: function(frm) {
        let fields = ['fees_structure', 'diet_plan', 'refund_policy'];
        fields.forEach(function(field) {
            if (frm.doc[field]) {
                let file_extension = frm.doc[field].split('.').pop().toLowerCase();
                if (file_extension !== 'pdf') {
                    frappe.msgprint(__('Please upload only PDF files for ' + field.replace('_', ' ') + '.'));
                    frm.set_value(field, '');
                    frappe.validated = false;
                }
            }
        });
    }
});

