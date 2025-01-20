import React from 'react';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import logo from "../../assets/image/logo.png"

const MainFooter = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='mb-8 md:mb-0'>
             <img className='w-56' src={logo} alt="logo" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            {/* About Section */}
            <div>
              <Footer.Title title="About NexusTech" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Company Overview</Footer.Link>
                <Footer.Link href="#">Our Services</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Support Section */}
            <div>
              <Footer.Title title="Support" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Contact Us</Footer.Link>
                <Footer.Link href="#">Help Center</Footer.Link>
                <Footer.Link href="#">FAQ</Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Legal Section */}
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
                <Footer.Link href="#">Cookie Policy</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="https://nexustech.com" by="NexusTech™" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://facebook.com/nexustech" icon={BsFacebook} />
            <Footer.Icon href="https://linkedin.com/company/nexustech" icon={BsLinkedin} />
            <Footer.Icon href="https://twitter.com/nexustech" icon={BsTwitter} />
            <Footer.Icon href="https://github.com/nexustech" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MainFooter;
