class LettersController < ApplicationController

	def index

	end

	def show

		p "GOT IT!!!"

 		word = Letter.join_letters(params["array"])

    p @result = ImageApiHelper.fetch_image(word)

		p "*"*60
		p word
		render json:@result
	end

end