module ImageApiHelper

  def self.fetch_image(word)
    headers = {
      "Api-Key" => "2fsx4awwtzd2f8bccw6sq2pk"
    }
    url = "https://api.gettyimages.com/v3/search/images/creative?exclude_nudity=true&phrase=#{word}"
    response = HTTParty.get(url, :headers => headers)
    image_result = response.parsed_response
    return image_result['images'][0]['display_sizes'][0]['uri']
  end

end