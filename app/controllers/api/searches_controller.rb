class Api::SearchesController < ApplicationController
  def index
    found = false
    if (params[:fname] && params[:fname].length > 0) || (params[:lname] && params[:lname].length > 0)
      @usernames= Invite.all.pluck(:username).map(&:downcase)
      @usernames.each do |username|
        found = true if username.include?(params[:fname].downcase)
        found = true if username.include?(params[:lname].downcase)
      end
    end
    if found
      @first = Invite.where("username ILIKE ?", "%#{params[:fname]}%")
      @last = Invite.where("username ILIKE ?", "%#{params[:lname]}%")
      @invites = @first.merge(@last)
    else
      @invites = {}
    end
    render 'api/invites/index'
  end
end
