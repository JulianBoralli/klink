class LettersController < ApplicationController

	def index
		
	end

	def show

		p "GOT IT!!!"

 		word = Letter.join_letters(params["array"])
		p "*"*60
		p word
		render json: word.to_json
	end

end