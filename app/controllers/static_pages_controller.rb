class StaticPagesController < ApplicationController
  def root
    render :file => 'frontend/index.html' and return
  end
end
