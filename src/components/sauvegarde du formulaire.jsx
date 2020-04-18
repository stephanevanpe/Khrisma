<form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>>
									<input type="hidden" name="form-name" value="contact" />
          <p class="hidden"><label>Don’t fill this out if you're human: <input name="__bf"/></label></p>
									<div>
										<div className='row'>
											<p className='input-field col s6'>
												<input type='text' name='name' value={name} onChange={this.handleChange} />
												<label>Nom</label>
											</p>
											<p className='input-field col s6'>
												<input type='text' name='firstname' value={firstname} onChange={this.handleChange} />
												<label>Prénom</label>
											</p>
										</div>
										<br />
										<div className='row'>
											<p className='input-field col s4'>
												<input type='date' name='birthday' value={birthday} onChange={this.handleChange}/>
												<label>Date de naissance</label>
											</p>
											<p className='input-field col s4'>
												<input type='number' name='zipcode' value={zipcode} onChange={this.handleChange}/>
												<label>Code postale</label>
											</p>
											<p className='input-field col s4'>
												<input type='text' name='city' value={city} onChange={this.handleChange}/>
												<label>Ville</label>
											</p>
										</div>
										<div className='row'>
											<p className='input-field col s6'>
												<input type='number' name='foneNumber' value={foneNumber} onChange={this.handleChange} />
												<label>Telephone</label>
											</p>
											<p className='input-field col s6'>
												<input type='email' name='mail' value={mail} onChange={this.handleChange}/>
												<label>Mail</label>
											</p>
										</div>

										<div className='row'>
											<Row>
												<Icon>mode_edit</Icon>
												<textarea
													name='message'
													type='text'
													l={12}
													m={12}
													s={12}
													xl={12}
													placeholder='Tapez votre message ici'
													value={message} onChange={this.handleChange}
												/>
											</Row>
										</div>
										<div className='row'>
											<p className='col s12'>
												<Button node='button' type='submit' waves='light' className='purple darken-4'>
													<span className='purple-text text-lighten-5'>Envoyer</span>
													<Icon left>
														<span className='purple-text text-lighten-5'>send</span>
													</Icon>
												</Button>
											</p>
										</div>
									</div>
								</form>