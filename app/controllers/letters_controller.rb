class LettersController < ApplicationController

	def index
		
	end

	def show

		p "GOT IT!!!"
		letters = JSON.parse(params["array"])
		word = ""
		letters.each do |letter|
			word << letter["letter"] + " " + letter["left"].to_s 
 		end

		p "*"*60
		p word
		render json: word.to_json
	end

end