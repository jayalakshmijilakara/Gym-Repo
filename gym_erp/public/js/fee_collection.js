frappe.ui.form.on('Fees Collection', {
    from_date: function(frm) {
        calculate_end_date(frm);
    },
    month: function(frm) {
        calculate_end_date(frm);
    }
});

function calculate_end_date(frm) {
    if (frm.doc.from_date && frm.doc.month) {
        let from_date = new Date(frm.doc.from_date);
        let months_to_add = parseInt(frm.doc.month);

        if (![1, 3, 6, 12].includes(months_to_add)) {
            frappe.msgprint(__('Please select a valid month period (1, 3, 6, 12).'));
            return;
        }

        from_date.setMonth(from_date.getMonth() + months_to_add);

        let to_date = from_date.toISOString().split('T')[0];

        frm.set_value('to_date', to_date);
    }
}

