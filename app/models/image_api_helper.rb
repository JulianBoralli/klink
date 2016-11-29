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

  def self.pixabay(word)
    mykey = "3853945-89c1a7a08a323dcf5124f0162"
    url = "https://pixabay.com/api/?key=#{mykey}&q=#{word}&image_type=photo"
    response = HTTParty.get(url)
    return response['hits'][0]['webformatURL']
  end

  def self.clipart(word)
    url = "https://openclipart.org/search/json/?query=#{word}&sort=downloads"
    response = HTTParty.get(url)
    p response
    if response['payload'].empty?
      return word
    else
      return response['payload'][0]['svg']['url']
    end
  end

end