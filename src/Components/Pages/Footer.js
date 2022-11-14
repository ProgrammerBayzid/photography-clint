import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'

const Footer = () => {

    return (
        <div className='mt-52'>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>

                    <span className="footer-title">Services</span>

                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img className='w-20 rounded-full' src="https://i.ibb.co/c2nT5YP/logo-png.jpg" alt="" srcset="" />
                    <p>Photo_Henter. <br />Providing By Bayzid #Copywrite Issue 2021</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a className='text-4xl text-primary' href="https://www.facebook.com/profile.php?id=100015109183358"><FaFacebook></FaFacebook></a>
                        <a className='text-4xl text-error' href="https://www.instagram.com/bayazid.26/"><FaInstagram></FaInstagram></a>
                        <a className='text-4xl text-primary' href=""><FaTwitter></FaTwitter></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
