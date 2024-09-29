import frappe
from frappe.utils import today

def update_fees_collection_status():
    current_date = today()

    fees_collection_records = frappe.get_all(
        'Fees Collection', 
        filters={'to_date': current_date}, 
        fields=['name', 'status']
    )
    
    for record in fees_collection_records:
        
        if record.status == 1:
            doc = frappe.get_doc('Fees Collection', record.name)
            doc.status = 0  
            doc.save()
            frappe.db.commit()
