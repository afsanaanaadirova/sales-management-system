import { useSelector, useDispatch } from "react-redux";
import { selecetAllInvoices,fetchinvoices} from "./invoiceSlice";
import { useEffect } from "react";

const PostsList = () => {
    const dispatch = useDispatch();

    const invoices = useSelector(selecetAllInvoices);

    useEffect(() => {
        dispatch(fetchinvoices())
    }, [dispatch])

    console.log(invoices)

    let content = invoices.map(invoice => <div>{invoice.customer}</div>)

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}
export default PostsList