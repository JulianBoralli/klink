class LettersController < ApplicationController

	def index

	end

	def show
    p "GOT IT!!!"
    word = Letter.join_letters(params["array"])
    p "*"*60

    @result = ImageApiHelper.clipart(word)
        p word
    if Obscenity.profane?(word)
      word = "whoopsies"
      @result = ""
    end
    @results = [@result, word]
    render json: @results.to_json
	end

end