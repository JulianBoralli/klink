class LettersController < ApplicationController

	def index

	end

	def show

		p "GOT IT!!!"

 		word = Letter.join_letters(params["array"])
    p "*"*60
    p @result = ImageApiHelper.fetch_image(word)
		p word
    @results = [@result, word]
		render json: @results.to_json
	end

end