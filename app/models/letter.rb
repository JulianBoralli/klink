class Letter < ApplicationRecord

	def self.join_letters(letter_json)
		letter_array = JSON.parse(letter_json)
		make_word(sort_letters(letter_array))
	end




private

	def self.sort_letters(letter_array)
		letter_array.sort {|a,b| a["left"] <=> b["left"]}
	end

	def self.make_word(letter_array)
		letter_array.inject("") {|word, hash| word << hash["letter"]  }
	end

end