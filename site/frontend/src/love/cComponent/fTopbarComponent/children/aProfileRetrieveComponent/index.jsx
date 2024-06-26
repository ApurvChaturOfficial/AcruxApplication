import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import FinalRouteName from '@/love/gRoute/FinalRouteName';
import { Separator } from '@/components/ui/separator';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


function getInitials(firstName, lastName) {
  // Extract the first character of the first name and last name
  const firstInitial = firstName?.charAt(0).toUpperCase();
  const lastInitial = lastName?.charAt(0).toUpperCase();
  
  // Return the initials
  return `${firstInitial}${lastInitial}`;
}


const ProfileRetrieveComponent = ({ Redux }) => {
  // JSX
  return (
    <React.Fragment>
      <section class="bg-[#C7D3D4] dark:bg-[#603F83] text-[#603F83] dark:text-[#C7D3D4] lg:px-20">
        <div class="container px-5 py-12 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src={Redux.state.ReceivedObject?.Retrieve?.coverImage?.url || "https://dummyimage.com/1200x500"} />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                  {Redux.state.ReceivedObject?.Retrieve?.image ? 
                    <img alt="content" className="object-cover object-center rounded-full" src={Redux.state.ReceivedObject?.Retrieve?.image?.url} />
                    :
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  }
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-lg">
                    {Redux.state.ReceivedObject?.Retrieve?.firstName} {" "}
                    {Redux.state.ReceivedObject?.Retrieve?.lastName}
                  </h2>
                  <div class="w-12 h-1 bg-[#603F83] dark:bg-[#C7D3D4] rounded mt-2 mb-4"></div>
                  <p class="text-base">{Redux.state.ReceivedObject?.Retrieve?.subtitle}</p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">{Redux.state.ReceivedObject?.Retrieve?.description}</p>
                <Link to={FinalRouteName.ContentRoute.TopbarRoute.ProfileUpdateRoute} class="inline-flex items-center">Edit This Shit
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap -m-4">

            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-[#603F83] dark:border-[#C7D3D4] flex flex-col relative overflow-hidden">
                <h1 class="text-2xl pb-4 mb-4 border-b border-[#603F83] dark:border-[#C7D3D4] leading-none">Critical Information</h1>

                <p class="font-bold">Profile Image:</p>
                <p class="mb-2">
                  <Avatar>
                    <AvatarImage src={Redux.state.ReceivedObject?.Retrieve?.image?.url} />
                    <AvatarFallback>{getInitials(
                      Redux.state.ReceivedObject?.Retrieve?.firstName, 
                      Redux.state.ReceivedObject?.Retrieve?.lastName
                    )}</AvatarFallback>
                  </Avatar>
                </p>

                <p class="font-bold">First Name:</p>
                <p class="mb-2">{Redux.state.ReceivedObject?.Retrieve?.firstName}</p>
                
                <p class="font-bold">Last Name:</p>
                <p class="mb-2">{Redux.state.ReceivedObject?.Retrieve?.lastName}</p>
                
                <p class="font-bold">Email:</p>
                <p class="mb-2">{Redux.state.ReceivedObject?.Retrieve?.email}</p>
                
                <p class="font-bold">Mobile:</p>
                <p class="mb-2">{Redux.state.ReceivedObject?.Retrieve?.mobile}</p>
              </div>
            </div>

            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-[#603F83] dark:border-[#C7D3D4] flex flex-col relative overflow-hidden">
                <h1 class="text-2xl pb-4 mb-4 border-b border-[#603F83] dark:border-[#C7D3D4] leading-none">Basic Information</h1>

                <p class="font-bold">Cover Image:</p>
                <p class="mb-2">
                  <Avatar>
                    <AvatarImage src={Redux.state.ReceivedObject?.Retrieve?.coverImage?.url} />
                    <AvatarFallback>{getInitials(
                      Redux.state.ReceivedObject?.Retrieve?.firstName, 
                      Redux.state.ReceivedObject?.Retrieve?.lastName
                    )}</AvatarFallback>
                  </Avatar>
                </p>

                <p class="font-bold">Title:</p>
                <p class="mb-2">{Redux.state.ReceivedObject?.Retrieve?.title}</p>
                
                <p class="font-bold">Subtitle:</p>
                <p class="mb-2">{Redux.state.ReceivedObject?.Retrieve?.subtitle}</p>
                
                <p class="font-bold">Description:</p>
                <p class="mb-2">{Redux.state.ReceivedObject?.Retrieve?.description}</p>
                
                <p class="font-bold">Detail:</p>
                <p class="mb-2">{Redux.state.ReceivedObject?.Retrieve?.detail}</p>
              </div>
            </div>

            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-[#603F83] dark:border-[#C7D3D4] flex flex-col relative overflow-hidden">
                <h1 class="text-2xl pb-4 mb-4 border-b border-[#603F83] dark:border-[#C7D3D4] leading-none">Relation Information</h1>
                
                <p class="font-bold">Role:</p>
                <p class="mb-2">{Redux.state.ReceivedObject?.Retrieve?.role?.aTitle}</p>

              </div>
            </div>

            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-[#603F83] dark:border-[#C7D3D4] flex flex-col relative overflow-hidden">
                <h1 class="text-2xl pb-4 mb-4 border-b border-[#603F83] dark:border-[#C7D3D4] leading-none">More Information</h1>

                <p class="font-bold">Address:</p>
                <p class="mb-2">
                  {Redux.state.ReceivedObject?.Retrieve?.address ? `
                    ${Redux.state.ReceivedObject?.Retrieve?.address?.lane}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.address?.street}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.address?.city}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.address?.state}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.address?.country}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.address?.pinCode}, 
                  ` : '-'
                  }
                </p>
                
                <p class="font-bold">Links:</p>
                <p class="mb-2">
                  {Redux.state.ReceivedObject?.Retrieve?.links?.map((each, index) => {
                    return (
                      <React.Fragment key={index} >
                        <a className='underline' href={each?.url} target="_blank" rel="noreferrer" ml={2}>{each?.title}</a> <br/>
                      </React.Fragment>
                    )
                  })}
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ProfileRetrieveComponent