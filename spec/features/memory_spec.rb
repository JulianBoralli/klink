require 'rails_helper'

RSpec.feature "Memory Panda", type: :feature do
  context 'a user' do
  describe 'initial game load' do
  include RSpecHtmlMatchers
    it 'can see the page title' do
      visit memory_path
      expect(page).to have_content("Panda Memory")
    end

    it 'has cards on the playing board' do
      visit memory_path
      expect(page).to have_tag('div')
    end
  end
 end
end
