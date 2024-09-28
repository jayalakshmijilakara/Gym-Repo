frappe.ui.form.on('Gym Member', {
    full_name: function(frm) {
        frm.set_value('user_id', frm.doc.full_name);
    }
});

