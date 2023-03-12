
import React, { useState } from 'react';
import './SalesContract.css';

function SalesContract() {
  const [formData, setFormData] = useState({
    date: '',
    sellerName: '',
    buyerName: '',
    horseName: '',
    purchasePrice: '',
    paymentDays: '',
    deliveryDays: '',
    state: ''
  });
  
  const [sellerSignature, setSellerSignature] = useState('');
  const [buyerSignature, setBuyerSignature] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSellerSignatureChange = e => {
    setSellerSignature(e.target.value);
  };

  const handleBuyerSignatureChange = e => {
    setBuyerSignature(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you can handle the submission of the form data, for example send it to a server or display it in a modal
    console.log(formData);
    console.log(`Seller signature: ${sellerSignature}`);
    console.log(`Buyer signature: ${buyerSignature}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>SALES CONTRACT FOR HARGER HORSE AUCTIONS</h1>
      <p>THIS AGREEMENT made and entered into on <input type="text" name="date" value={formData.date} onChange={handleChange} />, by and between <input type="text" name="sellerName" value={formData.sellerName} onChange={handleChange} />, and <input type="text" name="buyerName" value={formData.buyerName} onChange={handleChange} />.</p>
      <p>WHEREAS, the Seller desires to sell a horse, and the Buyer desires to purchase said horse.</p>
      <p>NOW, THEREFORE, the parties agree as follows:</p>
      <h2>Sale of Horse</h2>
      <p>The Seller hereby sells to the Buyer the horse known as <input type="text" name="horseName" value={formData.horseName} onChange={handleChange} />, (the “Horse”), for the sum of <input type="text" name="purchasePrice" value={formData.purchasePrice} onChange={handleChange} /> dollars ($<input type="text" name="purchasePrice" value={formData.purchasePrice} onChange={handleChange} />).</p>
      <h2>Payment</h2>
      <p>The Buyer agrees to pay the full purchase price to the Seller within <input type="text" name="paymentDays" value={formData.paymentDays} onChange={handleChange} /> days from the date of the auction. Payment shall be made in cash, certified check, or by wire transfer to the account of the Seller as specified in writing by the Seller.</p>
      <h2>Delivery</h2>
      <p>The Seller shall deliver the Horse to the Buyer within <input type="text" name="deliveryDays" value={formData.deliveryDays} onChange={handleChange} /> days from the date of receipt of full payment by the Seller. Delivery shall be made to the address specified in writing by the Buyer.</p>
      <h2>Condition of Horse</h2>
      <p>The Horse is sold “as is,” without any warranty or guarantee of any kind, express or implied, including without limitation any warranty or guarantee as to the Horse’s health, soundness, fitness for a particular purpose, or any other characteristic.</p>
      <h2>Risk of Loss</h2>
      <p>The risk of loss or damage to the Horse shall pass from the Seller to the Buyer upon delivery of the Horse to the Buyer.</p>
<h2>Dispute Resolution</h2>
<p>Any dispute arising under or in connection with this agreement shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, and judgment upon the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.</p>
<h2>Applicable Law</h2>
<p>This agreement shall be governed by and construed in accordance with the laws of the state of <input type="text" name="state" value={formData.state} onChange={handleChange} /></p>
<h2>Signatures</h2>
<p>IN WITNESS WHEREOF, the parties have executed this agreement as of the date first above written.</p>
<div className="signature">
<div className="seller-signature">
<label htmlFor="sellerSignature">Seller Signature:</label>
<input type="text" id="sellerSignature" name="sellerSignature" value={sellerSignature} onChange={handleSellerSignatureChange} />
</div>
<div className="buyer-signature">
<label htmlFor="buyerSignature">Buyer Signature:</label>
<input type="text" id="buyerSignature" name="buyerSignature" value={buyerSignature} onChange={handleBuyerSignatureChange} />
</div>
</div>
<button type="submit">Submit</button>
</form>
);
}

export default SalesContract;




