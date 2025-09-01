</div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-ocean mb-4">
              Get In <span className="text-opal">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your career through our professional networking events? Contact us today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-dark-ocean mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-opal rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-ocean mb-1">Phone</h4>
                      <p className="text-gray-600">+61 405 550 886</p>
                      <p className="text-sm text-gray-500">Mon-Fri 9:00 AM - 6:00 PM AEST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-opal rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-ocean mb-1">Email</h4>
                      <p className="text-gray-600">info@corpgems.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-opal rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-ocean mb-1">Address</h4>
                      <p className="text-gray-600">1/7 Hassall St<br />Parramatta NSW 2150<br />Australia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Event Booking */}
              <div className="bg-gradient-to-br from-opal/5 to-sunshine/5 rounded-3xl p-8 border border-opal/20">
                <h3 className="text-xl font-bold text-dark-ocean mb-4">Quick Event Registration</h3>
                <p className="text-gray-600 mb-6">Interested in our upcoming events? Get early access and exclusive updates.</p>

                <div className="space-y-4">
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-opal focus:border-transparent bg-white">
                    <option value="">Select an event</option>
                    <option value="jpned">JPNed Connects - Tokyo, Japan (Oct 30-31)</option>
                    <option value="philed">PHILed Connects - Philippines (Dec 18-19)</option>
                    <option value="ausied">AUSed Connects - Melbourne (Mar 15-16)</option>
                    <option value="uked">UKed Connects - London (Jun 20-21)</option>
                  </select>

                  <Button className="w-full bg-opal text-white hover:bg-opal-dark">
                    Express Interest
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-dark-ocean mb-6">Send us a Message</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-firstName" className="block text-sm font-semibold text-dark-ocean mb-2">
                      First Name *
                    </label>
                    <Input
                      id="contact-firstName"
                      type="text"
                      className="focus:ring-2 focus:ring-opal"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-lastName" className="block text-sm font-semibold text-dark-ocean mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="contact-lastName"
                      type="text"
                      className="focus:ring-2 focus:ring-opal"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-dark-ocean mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    className="focus:ring-2 focus:ring-opal"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-organization" className="block text-sm font-semibold text-dark-ocean mb-2">
                    Organization
                  </label>
                  <Input
                    id="contact-organization"
                    type="text"
                    className="focus:ring-2 focus:ring-opal"
                    placeholder="Your organization or company"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-dark-ocean mb-2">
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-opal focus:border-transparent bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="event-inquiry">Event Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="speaker">Speaking Opportunity</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="general">General Question</option>
                    <option value="support">Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-dark-ocean mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-opal focus:border-transparent resize-none"
                    placeholder="Tell us about your inquiry or how we can help..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-opal text-white hover:bg-opal-dark text-lg py-4"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
