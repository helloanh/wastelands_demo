require 'rails_helper'

RSpec.describe "pages/show", :type => :view do
  before(:each) do
    @page = assign(:page, Page.create!(
      :index => "Index"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Index/)
  end
end
