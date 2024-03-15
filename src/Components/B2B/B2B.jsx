import React from "react";


        const posts = [
            {
              category: 'Design',
              title: '10 Tips for Crafting the Perfect UX Portfolio',
              description: 'Learn how to showcase your design skills and stand out in a crowded job market.',
              author: 'Emily Lee',
              date: '3 April 2023',
              avatar: 'https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg',
              poster:
                'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
            },
            {
              category: 'Technology',
              title: 'The Future of Mobile App Development',
              description:
                'Discover the latest trends and techniques that will shape the future of mobile app development.',
              author: 'John Smith',
              date: '1 April 2023',
              avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
              poster:
                'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
            },
            {
              category: 'Business',
              title: 'How to Launch a Successful Startup',
              description:
                'Learn the essential steps to launch a successful startup and make your dreams a reality.',
              author: 'Sarah Brown',
              date: '28 March 2023',
              avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
              poster:
                'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            },
            {
              category: 'Health & Fitness',
              title: 'The Benefits of Mindfulness Meditation',
              description:
                'Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.',
              author: 'David Kim',
              date: '25 March 2023',
              avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
              poster:
                'https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            },
            {
              category: 'Education',
              title: 'Why Learning a Second Language is Important',
              description:
                'Explore the benefits of learning a second language and how it can improve your cognitive abilities.',
              author: 'Maria Rodriguez',
              date: '22 March 2023',
              avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
              poster:
                'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
            },
          
          
          ]
          
          const B2B = () => {
            return (
              
              <section>

          
                {/* blogs section */}
                <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="border">
              <img src={post.poster} className="aspect-video w-full rounded-md" alt="" />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #{post.category}
                </p>
                <p className="mt-4 flex-1 text-base font-semibold text-gray-900">{post.title}</p>
                <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                  {post.description}
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <img className="h-full w-10 rounded-lg" src={post.avatar} alt={post.author} />
                  <div>
                    <p className="text-sm font-semibold leading-tight text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-sm leading-tight text-gray-600">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
               {/* Contact Us */}

               <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0 mt-10">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="inline-block md:grid-cols-2">
                        <div className="p-6 mr-2  sm:rounded-lg float-left">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch: 
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-black-900"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md text-black-900 font-serif tracking-wide font-semibold w-40">
                                Radhika International 8/1/4 South Side Industrial Area, G.T Road, Ghaziabad
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-black-900">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-black-900"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-serif font-semibold w-40">
                                    +91 9599261209
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-black-900"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md text-black-900 tracking-wide font-semibold font-serif w-40">
                                    gargabhinav505@gmail.com
                                </div>
                            </div>
                        </div>

                        <form className="p-6 flex flex-col justify-center mt-4 ">
                            <div className="flex flex-col">
                                <label for="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-black-900 text-black-900 font-semibold focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-black-900 text-black-900 font-semibold focus:border-blue-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label for="inquiry" className="hidden">
                                    Inquiry
                                </label>
                                <input
                                    type="text"
                                    name="inquiry"
                                    id="inquiry"
                                    placeholder="Inquiry"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-black-900 text-black-900 font-semibold focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Phone Number"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-black-900 text-black-900 font-semibold focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-blue-500 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
              </section>
            )
          
}
export default B2B;


