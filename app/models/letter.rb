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
		prev_coord = nil
		letter_array.inject("") do |word, hash| 
			if letter_array[0] == hash
				prev_coord = hash["left"]
				word << hash["letter"]
			else
				diff = hash["left"] - prev_coord
				prev_coord = hash["left"]
				if diff > 100  
					word << " " << hash["letter"]
				else 
					word << hash["letter"]
				end
			end
		end
	end

end

