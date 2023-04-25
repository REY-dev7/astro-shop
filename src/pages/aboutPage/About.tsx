import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-16 md:px-20 lg:px-28 py-16 ">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-lg text-gray-500">
          We are a team of passionate individuals dedicated to providing you with the best online shopping experience possible.
        </p>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-500">
          Our mission is to offer a wide range of high-quality products at affordable prices, while providing excellent customer service and a user-friendly interface.
        </p>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
        <ul className="text-lg text-gray-500 list-disc pl-6">
          <li>Quality - We believe that our customers deserve only the best products, so we carefully select each item in our inventory.</li>
          <li>Affordability - We strive to offer competitive prices that are accessible to everyone.</li>
          <li>Customer Service - We are committed to providing excellent customer service, and are always here to help with any questions or concerns.</li>
          <li>User-Friendly Interface - We understand that online shopping can be overwhelming, so we have created a simple and intuitive interface to make your experience as stress-free as possible.</li>
        </ul>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
        <p className="text-lg text-gray-500">
          We love hearing from our customers! If you have any questions or comments, please don't hesitate to <Link to="/contact-page" className="text-blue-500 hover:underline">contact us</Link>.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;










// import React from "react";

// interface TeamMember {
//   name: string;
//   title: string;
//   bio: string;
//   photoUrl: string;
// }

// interface Product {
//   name: string;
//   description: string;
//   imageUrl: string;
//   price: number;
// }

// export const AboutPage: React.FC = () => {
//   const teamMembers: TeamMember[] = [
//     {
//       name: "John Doe",
//       title: "Founder & CEO",
//       bio: "John Doe is the founder and CEO of Astro Shop. He has over 20 years of experience in the [insert industry] industry and is passionate about providing high-quality products and services to his customers.",
//       photoUrl: "https://example.com/john-doe.jpg",
//     },
//     {
//       name: "Jane Smith",
//       title: "Marketing Director",
//       bio: "Jane Smith is the Marketing Director at Astro Shop. She has a degree in marketing from [insert university] and is passionate about helping businesses grow and succeed.",
//       photoUrl: "https://example.com/jane-smith.jpg",
//     },
//   ];

//   const products: Product[] = [
//     {
//       name: "Product 1",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod felis ac sapien dignissim, vel feugiat eros pellentesque. Nunc ac libero nisl.",
//       imageUrl: "https://example.com/product1.jpg",
//       price: 29.99,
//     },
//     {
//       name: "Product 2",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod felis ac sapien dignissim, vel feugiat eros pellentesque. Nunc ac libero nisl.",
//       imageUrl: "https://example.com/product2.jpg",
//       price: 39.99,
//     },
//   ];

//   return (
//     <div>
//       <h1>About Astro Shop</h1>
//       <p>
//         We are a family-owned business that's been providing high-quality [insert product or service category here] to customers for over [insert number of years] years. We pride ourselves on our commitment to [insert what your business is committed to here] and our dedication to delivering excellent customer service.
//       </p>
//       <h2>Our Team</h2>
//       {teamMembers.map((teamMember) => (
//         <div key={teamMember.name}>
//           <img src={teamMember.photoUrl} alt={teamMember.name} />
//           <h3>{teamMember.name}</h3>
//           <p>{teamMember.title}</p>
//           <p>{teamMember.bio}</p>
//         </div>
//       ))}
//       <h2>Our Products</h2>
//       <p>
//         We offer a wide range of [insert product or service category here] to meet the needs of our customers. Our products are designed to [insert the benefits your products provide here]. We source our products from trusted suppliers and are committed to providing high-quality products at competitive prices.
//       </p>
//       <div>
//         {products.map((product) => (
//           <div key={product.name}>
//             <img src={product.imageUrl} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <p>{`Price: $${product.price.toFixed(2)}`}</p>
//           </div>
//         ))}
//       </div>
//   <h2>Contact Us</h2>
//   <p>
//     We would love to hear from you! If you have any questions, comments, or feedback, please don't hesitate to contact us using the information below.
//   </p>
//   <ul>
//     <li>Phone: [Insert phone number here]</li>
//     <li>Email: [Insert email address here]</li>
//     <li>Address: [Insert business address here]</li>
//   </ul>
// </div>
// );
// };