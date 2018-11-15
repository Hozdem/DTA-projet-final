package fr.dta.projetFinal.enums;

import java.util.List;

public enum EnumSupportProd
{
	SUPPORT_PC("SUPPORT_PC"),
	SUPPORT_XBOXONE("SUPPORT_XBOXONE"),
	SUPPORT_PS4("SUPPORT_PS4");
	
	private List<String> supports;
	
	private EnumSupportProd(String s)
	{
		this.supports.add(s);
	}

	public List<String> getGenres()
	{
		return this.supports;
	}

	public void setGenres(List<String> support)
	{
		this.supports = support;
	}

	
	
}