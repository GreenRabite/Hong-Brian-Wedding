class Api::InvitesController < ApplicationController
  def index
    @invites = Invite.all
    render :index
  end
end
