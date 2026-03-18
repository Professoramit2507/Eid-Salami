// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import EidImg from "../../assets/image/eid.jpg";

// const Register = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     batch: "",
//     department: "CSE",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Register data:", form);
//     // save data
//     localStorage.setItem("user", JSON.stringify(form));

//     toast.success("Registration Successful 🎉");

//     setTimeout(() => {
//       navigate("/login");
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-[#0D4444]">
     

//       {/* Left Side */}
//       <div className="md:w-1/2 flex flex-col rounded-3xl border-2 mr-2 justify-center items-center 
//       bg-[#0D4444] text-white text-center p-8">
//         <p className="text-yellow-300  border p-2 rounded-2xl md:mb-14">
//           Eidul Fitr 2026
//         </p>
//         <h1 className="text-4xl font-bold md:mb-10">
//           ঈদের চাঁদ আকাশে, <br />
//           <span className="text-yellow-500">সালামি পাঠান স্মার্টভাবে।</span>
//         </h1>

//         <img
//           src={EidImg}
//           className="w-full h-64 object-cover rounded-xl mb-6"
//         />
//         <p className="text-md text-gray-300 mt-8">
//           ঈদ মোবারক ২০২৬! এই ঈদে আমরা ডিজিটাল সালামি ব্যবস্থার মাধ্যমে সবার মাঝে
//           ঈদের আনন্দ এবং শুভেচ্ছা পাঠাতে পারব। জয় হোক ঈদের এই নতুন সূচনা!
//         </p>
//       </div>



// {/*  */}

//         {/* Right Side */}
//       <div className="md:w-1/2 flex flex-col rounded-3xl p-4 justify-center px-8 md:px-16 py-12 bg-gradient-to-r from-yellow-300   to-green-600 shadow-lg">
//         <h2 className="text-3xl font-bold mb-6 text-black">
//           Eid Mubarak! Register Now
//         </h2>

//         <div className="mb-3">
//               {/* Eid Celebration Image */}
//         <div className="mt-8 flex justify-center">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5x6RLX2jbAUG-X3gc9eoI1CrwRX8OTM1cRw&s"
//             alt="Eid Celebration"
//             className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 shadow-lg"
//           />
//         </div>


//              {/* Eid Greeting */}
//            <div className="text-center mt-6">
//           <h3 className="text-xl font-bold text-blue-600">
//             Eid Mubarak!
//           </h3>
//           <p className="text-sm text-gray-600">
//             May this Eid bring new hope and spread love to everyone.
//           </p>
//         </div>
//         </div>
      

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border rounded-lg bg-[#F1F1F1] focus:ring-2 focus:ring-yellow-500"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border rounded-lg bg-[#F1F1F1] focus:ring-2 focus:ring-yellow-500"
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border rounded-lg bg-[#F1F1F1] focus:ring-2 focus:ring-yellow-500"
//             required
//           />

//           <select
//             name="batch"
//             value={form.batch}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border rounded-lg bg-[#F1F1F1] focus:ring-2 focus:ring-yellow-500"
//             required
//           >
//             <option value="">Select Batch (1-6)</option>
//             {[1, 2, 3, 4, 5, 6].map((b) => (
//               <option key={b} value={b}>
//                 Batch {b}
//               </option>
//             ))}
//           </select>

//           <input
//             type="text"
//             name="department"
//             value={form.department}
//             readOnly
//             className="w-full px-4 py-3 border rounded-lg bg-[#E0E0E0]"
//           />

//           <button
//             type="submit"
//             className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg mt-4"
//           >
//             Register
//           </button>
//         </form>

//         <p className="mt-4 text-sm text-black">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-500 hover:underline">
//             Login here
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Register;












import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import EidImg from "../../assets/image/eid.jpg";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    batch: "",
    department: "CSE",
    registration: "",
    district: "",
    session: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setForm((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // save data
    localStorage.setItem("user", JSON.stringify(form));
    localStorage.setItem("isLoggedIn", "true");

    toast.success("Registration Successful 🎉");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0D4444]">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col rounded-3xl border-2 mr-2 justify-center items-center bg-[#0D4444] text-white text-center p-8">
        <p className="text-yellow-300 border p-2 rounded-2xl md:mb-14">
          Eidul Fitr 2026
        </p>
        <h1 className="text-4xl font-bold md:mb-10">
          ঈদের চাঁদ আকাশে, <br />
          <span className="text-yellow-500">সালামি পাঠান স্মার্টভাবে।</span>
        </h1>

        <img
          src={EidImg}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <p className="text-md text-gray-300 mt-8">
          ঈদ মোবারক ২০২৬! এই ঈদে আমরা ডিজিটাল সালামি ব্যবস্থার মাধ্যমে সবার মাঝে
          ঈদের আনন্দ এবং শুভেচ্ছা পাঠাতে পারব। জয় হোক ঈদের এই নতুন সূচনা!
        </p>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex flex-col rounded-3xl p-4 justify-center px-8 md:px-16 py-12 bg-gradient-to-r from-yellow-300 to-green-600 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-black">Eid Mubarak! Register Now</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-[#F1F1F1] focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-[#F1F1F1] focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-[#F1F1F1] focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="text"
            name="registration"
            placeholder="Registration Number"
            value={form.registration}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-[#F1F1F1] focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="text"
            name="district"
            placeholder="District"
            value={form.district}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-[#F1F1F1] focus:ring-2 focus:ring-yellow-500"
            required
          />

          <input
            type="text"
            name="session"
            placeholder="Session (e.g., 2021-22)"
            value={form.session}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-[#F1F1F1] focus:ring-2 focus:ring-yellow-500"
            required
          />

          <select
            name="batch"
            value={form.batch}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-[#F1F1F1] focus:ring-2 focus:ring-yellow-500"
            required
          >
            <option value="">Select Batch (1-6)</option>
            {[1, 2, 3, 4, 5, 6].map((b) => (
              <option key={b} value={b}>
                Batch {b}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="department"
            value={form.department}
            readOnly
            className="w-full px-4 py-3 border rounded-lg bg-[#E0E0E0]"
          />

          <div>
            <label className="block mb-2 font-semibold">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-lg bg-[#F1F1F1]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg mt-4"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-black">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
