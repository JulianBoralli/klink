require 'rails_helper'

RSpec.feature "Drawings", type: :feature do
  context 'a user' do
    describe 'initial page load' do
      include RSpecHtmlMatchers

      it 'gives a selection for backgrounds' do
        visit draw_path
        expect(page).to have_content("pick a backdrop to draw on!")
      end

      it 'loads with images to select from' do
        visit draw_path
        expect('<img src="images/landscape.png" class="drawing-bg" id="land-bg">').to have_tag('img')
      end
    end
  end
end
